import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo12Component } from './lib64-demo12.component';

describe('Lib64Demo12Component', () => {
  let component: Lib64Demo12Component;
  let fixture: ComponentFixture<Lib64Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
