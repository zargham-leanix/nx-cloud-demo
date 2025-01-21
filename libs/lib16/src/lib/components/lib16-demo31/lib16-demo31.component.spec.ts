import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo31Component } from './lib16-demo31.component';

describe('Lib16Demo31Component', () => {
  let component: Lib16Demo31Component;
  let fixture: ComponentFixture<Lib16Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
