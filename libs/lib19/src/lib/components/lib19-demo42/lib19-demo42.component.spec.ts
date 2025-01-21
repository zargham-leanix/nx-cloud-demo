import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo42Component } from './lib19-demo42.component';

describe('Lib19Demo42Component', () => {
  let component: Lib19Demo42Component;
  let fixture: ComponentFixture<Lib19Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
