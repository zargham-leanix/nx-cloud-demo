import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo5Component } from './lib6-demo5.component';

describe('Lib6Demo5Component', () => {
  let component: Lib6Demo5Component;
  let fixture: ComponentFixture<Lib6Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
