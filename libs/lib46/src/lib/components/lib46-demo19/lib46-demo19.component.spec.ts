import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo19Component } from './lib46-demo19.component';

describe('Lib46Demo19Component', () => {
  let component: Lib46Demo19Component;
  let fixture: ComponentFixture<Lib46Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
