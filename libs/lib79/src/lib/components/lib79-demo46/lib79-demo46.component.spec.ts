import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo46Component } from './lib79-demo46.component';

describe('Lib79Demo46Component', () => {
  let component: Lib79Demo46Component;
  let fixture: ComponentFixture<Lib79Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
