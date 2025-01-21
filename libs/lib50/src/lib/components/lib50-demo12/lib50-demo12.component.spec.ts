import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo12Component } from './lib50-demo12.component';

describe('Lib50Demo12Component', () => {
  let component: Lib50Demo12Component;
  let fixture: ComponentFixture<Lib50Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
