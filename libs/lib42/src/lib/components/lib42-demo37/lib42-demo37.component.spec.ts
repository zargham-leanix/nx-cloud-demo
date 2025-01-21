import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo37Component } from './lib42-demo37.component';

describe('Lib42Demo37Component', () => {
  let component: Lib42Demo37Component;
  let fixture: ComponentFixture<Lib42Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
