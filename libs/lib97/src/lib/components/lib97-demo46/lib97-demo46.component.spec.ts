import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo46Component } from './lib97-demo46.component';

describe('Lib97Demo46Component', () => {
  let component: Lib97Demo46Component;
  let fixture: ComponentFixture<Lib97Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
