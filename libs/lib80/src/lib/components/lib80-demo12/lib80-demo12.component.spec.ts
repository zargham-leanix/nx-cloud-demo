import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo12Component } from './lib80-demo12.component';

describe('Lib80Demo12Component', () => {
  let component: Lib80Demo12Component;
  let fixture: ComponentFixture<Lib80Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
