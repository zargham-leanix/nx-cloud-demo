import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo44Component } from './lib19-demo44.component';

describe('Lib19Demo44Component', () => {
  let component: Lib19Demo44Component;
  let fixture: ComponentFixture<Lib19Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
