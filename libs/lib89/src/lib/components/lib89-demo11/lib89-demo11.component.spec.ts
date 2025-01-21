import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo11Component } from './lib89-demo11.component';

describe('Lib89Demo11Component', () => {
  let component: Lib89Demo11Component;
  let fixture: ComponentFixture<Lib89Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
