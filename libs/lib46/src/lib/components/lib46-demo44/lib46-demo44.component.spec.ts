import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo44Component } from './lib46-demo44.component';

describe('Lib46Demo44Component', () => {
  let component: Lib46Demo44Component;
  let fixture: ComponentFixture<Lib46Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
