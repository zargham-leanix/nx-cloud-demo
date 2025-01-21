import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo2Component } from './lib9-demo2.component';

describe('Lib9Demo2Component', () => {
  let component: Lib9Demo2Component;
  let fixture: ComponentFixture<Lib9Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
