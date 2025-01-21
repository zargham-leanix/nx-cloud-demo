import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo19Component } from './lib16-demo19.component';

describe('Lib16Demo19Component', () => {
  let component: Lib16Demo19Component;
  let fixture: ComponentFixture<Lib16Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
