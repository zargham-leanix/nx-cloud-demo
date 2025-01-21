import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo11Component } from './lib19-demo11.component';

describe('Lib19Demo11Component', () => {
  let component: Lib19Demo11Component;
  let fixture: ComponentFixture<Lib19Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
