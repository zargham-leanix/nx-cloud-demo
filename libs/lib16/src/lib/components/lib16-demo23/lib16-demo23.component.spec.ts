import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo23Component } from './lib16-demo23.component';

describe('Lib16Demo23Component', () => {
  let component: Lib16Demo23Component;
  let fixture: ComponentFixture<Lib16Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
