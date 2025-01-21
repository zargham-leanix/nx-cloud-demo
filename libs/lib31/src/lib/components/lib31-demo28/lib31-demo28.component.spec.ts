import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo28Component } from './lib31-demo28.component';

describe('Lib31Demo28Component', () => {
  let component: Lib31Demo28Component;
  let fixture: ComponentFixture<Lib31Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
