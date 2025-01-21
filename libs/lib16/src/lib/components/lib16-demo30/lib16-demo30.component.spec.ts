import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo30Component } from './lib16-demo30.component';

describe('Lib16Demo30Component', () => {
  let component: Lib16Demo30Component;
  let fixture: ComponentFixture<Lib16Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
