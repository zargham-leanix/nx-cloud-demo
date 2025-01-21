import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo46Component } from './lib19-demo46.component';

describe('Lib19Demo46Component', () => {
  let component: Lib19Demo46Component;
  let fixture: ComponentFixture<Lib19Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
