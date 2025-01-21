import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo25Component } from './lib70-demo25.component';

describe('Lib70Demo25Component', () => {
  let component: Lib70Demo25Component;
  let fixture: ComponentFixture<Lib70Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
