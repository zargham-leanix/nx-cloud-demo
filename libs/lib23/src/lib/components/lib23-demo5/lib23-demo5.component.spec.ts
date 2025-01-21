import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo5Component } from './lib23-demo5.component';

describe('Lib23Demo5Component', () => {
  let component: Lib23Demo5Component;
  let fixture: ComponentFixture<Lib23Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
