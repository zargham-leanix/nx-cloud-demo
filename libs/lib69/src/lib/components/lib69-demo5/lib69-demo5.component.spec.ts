import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo5Component } from './lib69-demo5.component';

describe('Lib69Demo5Component', () => {
  let component: Lib69Demo5Component;
  let fixture: ComponentFixture<Lib69Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
