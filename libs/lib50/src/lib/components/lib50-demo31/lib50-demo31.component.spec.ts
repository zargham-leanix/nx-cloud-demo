import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo31Component } from './lib50-demo31.component';

describe('Lib50Demo31Component', () => {
  let component: Lib50Demo31Component;
  let fixture: ComponentFixture<Lib50Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
