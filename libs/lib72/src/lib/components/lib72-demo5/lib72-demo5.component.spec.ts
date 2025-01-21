import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo5Component } from './lib72-demo5.component';

describe('Lib72Demo5Component', () => {
  let component: Lib72Demo5Component;
  let fixture: ComponentFixture<Lib72Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
