import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo46Component } from './lib24-demo46.component';

describe('Lib24Demo46Component', () => {
  let component: Lib24Demo46Component;
  let fixture: ComponentFixture<Lib24Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
