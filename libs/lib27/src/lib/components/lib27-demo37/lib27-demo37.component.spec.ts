import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo37Component } from './lib27-demo37.component';

describe('Lib27Demo37Component', () => {
  let component: Lib27Demo37Component;
  let fixture: ComponentFixture<Lib27Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
