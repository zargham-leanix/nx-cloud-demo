import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo10Component } from './lib50-demo10.component';

describe('Lib50Demo10Component', () => {
  let component: Lib50Demo10Component;
  let fixture: ComponentFixture<Lib50Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
