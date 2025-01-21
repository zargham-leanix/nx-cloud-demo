import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo4Component } from './lib46-demo4.component';

describe('Lib46Demo4Component', () => {
  let component: Lib46Demo4Component;
  let fixture: ComponentFixture<Lib46Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
