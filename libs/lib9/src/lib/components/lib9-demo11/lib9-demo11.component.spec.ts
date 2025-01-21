import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo11Component } from './lib9-demo11.component';

describe('Lib9Demo11Component', () => {
  let component: Lib9Demo11Component;
  let fixture: ComponentFixture<Lib9Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
