import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo46Component } from './lib89-demo46.component';

describe('Lib89Demo46Component', () => {
  let component: Lib89Demo46Component;
  let fixture: ComponentFixture<Lib89Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
