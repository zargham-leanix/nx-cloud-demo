import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo12Component } from './lib54-demo12.component';

describe('Lib54Demo12Component', () => {
  let component: Lib54Demo12Component;
  let fixture: ComponentFixture<Lib54Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
