import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo5Component } from './lib45-demo5.component';

describe('Lib45Demo5Component', () => {
  let component: Lib45Demo5Component;
  let fixture: ComponentFixture<Lib45Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
