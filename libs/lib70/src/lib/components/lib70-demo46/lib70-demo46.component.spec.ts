import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo46Component } from './lib70-demo46.component';

describe('Lib70Demo46Component', () => {
  let component: Lib70Demo46Component;
  let fixture: ComponentFixture<Lib70Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
