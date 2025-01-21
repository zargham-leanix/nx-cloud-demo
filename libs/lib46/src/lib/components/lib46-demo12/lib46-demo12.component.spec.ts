import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo12Component } from './lib46-demo12.component';

describe('Lib46Demo12Component', () => {
  let component: Lib46Demo12Component;
  let fixture: ComponentFixture<Lib46Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
