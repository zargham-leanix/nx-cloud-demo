import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo25Component } from './lib89-demo25.component';

describe('Lib89Demo25Component', () => {
  let component: Lib89Demo25Component;
  let fixture: ComponentFixture<Lib89Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
