import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo46Component } from './lib5-demo46.component';

describe('Lib5Demo46Component', () => {
  let component: Lib5Demo46Component;
  let fixture: ComponentFixture<Lib5Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
