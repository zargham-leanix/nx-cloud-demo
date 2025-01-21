import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo46Component } from './lib64-demo46.component';

describe('Lib64Demo46Component', () => {
  let component: Lib64Demo46Component;
  let fixture: ComponentFixture<Lib64Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
