import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo5Component } from './lib39-demo5.component';

describe('Lib39Demo5Component', () => {
  let component: Lib39Demo5Component;
  let fixture: ComponentFixture<Lib39Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
