import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo31Component } from './lib46-demo31.component';

describe('Lib46Demo31Component', () => {
  let component: Lib46Demo31Component;
  let fixture: ComponentFixture<Lib46Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
