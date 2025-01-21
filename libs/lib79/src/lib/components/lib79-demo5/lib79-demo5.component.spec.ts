import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo5Component } from './lib79-demo5.component';

describe('Lib79Demo5Component', () => {
  let component: Lib79Demo5Component;
  let fixture: ComponentFixture<Lib79Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
