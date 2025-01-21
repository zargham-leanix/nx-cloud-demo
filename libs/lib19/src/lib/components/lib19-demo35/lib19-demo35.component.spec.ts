import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo35Component } from './lib19-demo35.component';

describe('Lib19Demo35Component', () => {
  let component: Lib19Demo35Component;
  let fixture: ComponentFixture<Lib19Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
