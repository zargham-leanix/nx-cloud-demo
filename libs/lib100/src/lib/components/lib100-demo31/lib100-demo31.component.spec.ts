import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo31Component } from './lib100-demo31.component';

describe('Lib100Demo31Component', () => {
  let component: Lib100Demo31Component;
  let fixture: ComponentFixture<Lib100Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
