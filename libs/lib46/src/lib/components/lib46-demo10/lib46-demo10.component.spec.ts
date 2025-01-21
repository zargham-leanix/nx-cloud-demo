import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo10Component } from './lib46-demo10.component';

describe('Lib46Demo10Component', () => {
  let component: Lib46Demo10Component;
  let fixture: ComponentFixture<Lib46Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
