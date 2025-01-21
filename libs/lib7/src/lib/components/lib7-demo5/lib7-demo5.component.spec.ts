import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo5Component } from './lib7-demo5.component';

describe('Lib7Demo5Component', () => {
  let component: Lib7Demo5Component;
  let fixture: ComponentFixture<Lib7Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
