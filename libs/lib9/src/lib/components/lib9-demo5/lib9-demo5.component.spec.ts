import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo5Component } from './lib9-demo5.component';

describe('Lib9Demo5Component', () => {
  let component: Lib9Demo5Component;
  let fixture: ComponentFixture<Lib9Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
