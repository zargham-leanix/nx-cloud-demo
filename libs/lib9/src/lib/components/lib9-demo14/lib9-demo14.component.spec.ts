import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo14Component } from './lib9-demo14.component';

describe('Lib9Demo14Component', () => {
  let component: Lib9Demo14Component;
  let fixture: ComponentFixture<Lib9Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
