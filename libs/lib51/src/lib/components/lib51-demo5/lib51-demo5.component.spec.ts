import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo5Component } from './lib51-demo5.component';

describe('Lib51Demo5Component', () => {
  let component: Lib51Demo5Component;
  let fixture: ComponentFixture<Lib51Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
