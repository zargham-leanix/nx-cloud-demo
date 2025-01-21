import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo28Component } from './lib77-demo28.component';

describe('Lib77Demo28Component', () => {
  let component: Lib77Demo28Component;
  let fixture: ComponentFixture<Lib77Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
