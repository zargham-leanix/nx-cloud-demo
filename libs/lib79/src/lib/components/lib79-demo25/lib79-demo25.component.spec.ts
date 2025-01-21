import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo25Component } from './lib79-demo25.component';

describe('Lib79Demo25Component', () => {
  let component: Lib79Demo25Component;
  let fixture: ComponentFixture<Lib79Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
