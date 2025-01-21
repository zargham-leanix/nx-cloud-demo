import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo46Component } from './lib54-demo46.component';

describe('Lib54Demo46Component', () => {
  let component: Lib54Demo46Component;
  let fixture: ComponentFixture<Lib54Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
