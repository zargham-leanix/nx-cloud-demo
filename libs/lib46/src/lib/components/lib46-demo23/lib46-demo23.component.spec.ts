import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo23Component } from './lib46-demo23.component';

describe('Lib46Demo23Component', () => {
  let component: Lib46Demo23Component;
  let fixture: ComponentFixture<Lib46Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
