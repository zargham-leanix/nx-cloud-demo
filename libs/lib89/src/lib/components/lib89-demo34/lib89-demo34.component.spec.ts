import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo34Component } from './lib89-demo34.component';

describe('Lib89Demo34Component', () => {
  let component: Lib89Demo34Component;
  let fixture: ComponentFixture<Lib89Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
