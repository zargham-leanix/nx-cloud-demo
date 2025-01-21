import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo12Component } from './lib27-demo12.component';

describe('Lib27Demo12Component', () => {
  let component: Lib27Demo12Component;
  let fixture: ComponentFixture<Lib27Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
